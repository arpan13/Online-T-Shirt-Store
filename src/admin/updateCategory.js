import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { updateCategory, getCategories } from "./helper/adminapicall";

const UpdateCategory = ({ match }) => {
    const [name, setName] = useState();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const { user, token } = isAuthenticated();
    const goBack = () => (
        <div className="mt-5">
            <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
                Admin Home
      </Link>
        </div>
    );

    const preload = () => {
        getCategories().then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setName("");
                console.log(data);
            }
        });
    };

    const handleChange = (event) => {
        //
        setError("");
        setName(event.target.value);
    };
    const onSubmit = (event) => {
        //
        event.preventDefault();
        setError("");
        setSuccess(false);
        //backend request fired
        updateCategory(match.params.categoryId, user._id, token, { name }).then((data) => {
            if (data.error) {
                setError(true);
            } else {
                setError("");
                setSuccess(true);
                setName("");
            }
        });
    };
    useEffect(() => {
        preload(match.params.categoryId);
    }, [])

    const warningMessage = () => {
        if (error) {
            return <h4 className="text-success">Failed to update Category</h4>;
        }
    };

    const successMessage = () => {
        //
        if (success) {
            return <h4 className="text-success">Category update Sucessfully</h4>;
        }
    };

    const myCategoryForm = () => {
        return (
            <form>
                <div className="form-group">
                    <p className="lead">Enter the category</p>
                    <input
                        className="form-control my-3"
                        onChange={handleChange}
                        value={name}
                        autoFocus
                        required
                        placeholder="For Ex.summer"
                    ></input>
                    <button onClick={onSubmit} className="btn btn-outline-info">
                        Update Category
          </button>
                </div>
            </form>
        );
    };

    return (
        <Base
            title="Create a category here"
            description="Add a new category for new products"
            className="container bg-info p-4"
        >
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {warningMessage()}
                    {myCategoryForm()}
                    {goBack()}
                </div>
            </div>
        </Base>
    );
};

export default UpdateCategory;
