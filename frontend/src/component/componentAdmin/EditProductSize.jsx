import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useProductSizeStore from '../../store/useProductSizeStore';
import {
  TextField,
  Button,
  Snackbar,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const EditProductSize = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedProductSize, fetchProductSizeById, updateProductSize, loading, error } = useProductSizeStore();

  const [name, setName] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [showOnPublic, setShowOnPublic] = useState(true);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await fetchProductSizeById(id);
    };
    fetchData();
  }, [fetchProductSizeById, id]);

  useEffect(() => {
    if (selectedProductSize) {
      setName(selectedProductSize.name);
      setIsActive(selectedProductSize.isActive);
      setShowOnPublic(selectedProductSize.showOnPublic);
    }
  }, [selectedProductSize]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setSnackbarMessage('Product size name is required');
      setOpenSnackbar(true);
      return;
    }

    const data = { name, isActive, showOnPublic };
    try {
      await updateProductSize(id, data);
      setSnackbarMessage('Product size updated successfully!');
      setOpenSnackbar(true);

      setTimeout(() => {
        navigate('/admin/product-sizes');
      }, 3000);
    } catch (err) {
      setSnackbarMessage(error || 'Failed to update product size');
      setOpenSnackbar(true);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!selectedProductSize) {
    return <div>No product size found for the provided ID.</div>;
  }

  return (
    <div className="p-4 shadow rounded-lg">
      <h1 className="border-l-4 primaryBorderColor primaryTextColor mb-6 pl-2 text-lg font-semibold ">
        Edit Product Size
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6 flex flex-col gap-5">
        <TextField
          label="Product Size Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          fullWidth
          required
          error={!name}
          helperText={!name ? 'Product size name is required' : ''}
        />

        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            value={isActive ? 'true' : 'false'}
            onChange={(e) => setIsActive(e.target.value === 'true')}
            label="Status"
          >
            <MenuItem value="true">Active</MenuItem>
            <MenuItem value="false">Inactive</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Show on Public</InputLabel>
          <Select
            value={showOnPublic ? 'true' : 'false'}
            onChange={(e) => setShowOnPublic(e.target.value === 'true')}
            label="Show on Public"
          >
            <MenuItem value="true">Yes</MenuItem>
            <MenuItem value="false">No</MenuItem>
          </Select>
        </FormControl>

        <div className="flex justify-center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
          >
            {loading ? 'Saving...' : 'Update Product Size'}
          </Button>
        </div>
      </form>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
    </div>
  );
};

export default EditProductSize;