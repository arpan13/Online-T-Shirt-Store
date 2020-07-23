import API from "../../backend";

//category calls
export const createCategory = (userId, token, category) => {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  };

  return fetch(`${API}/category/create/${userId}`, requestOptions)
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};
//get all categories
export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: "GET",
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};
//update all actegories
export const updateCategory = (categoryId, userId, token, category) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  };
  return fetch(`${API}/category/${categoryId}/${userId}`, requestOptions)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};


//products calls
export const deleteCategory = (categoryId, userId, token) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return fetch(`${API}/category/${categoryId}/${userId}`, requestOptions)
    .then(res => res.json())
    .catch(err => console.log(err));
};

//create a product
export const createProduct = (userId, token, product) => {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  };
  return fetch(`${API}/product/create/${userId}`, requestOptions)
    .then(res => res.json())
    .catch(err => console.log(err));
};

//get all products
export const getProducts = () => {
  return fetch(`${API}/products`, {
    method: "GET",
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

//delete product
export const deleteProduct = (productId, userId, token) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return fetch(`${API}/product/${productId}/${userId}`, requestOptions)
    .then(res => res.json())
    .catch(err => console.log(err));
};

//get a product

export const getProduct = (productId) => {
  return fetch(`${API}/product/${productId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//update a product
export const updateProduct = (productId, userId, token, product) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  };
  return fetch(`${API}/product/${productId}/${userId}`, requestOptions)
    .then(res => res.json())
    .catch(err => console.log(err));
};

