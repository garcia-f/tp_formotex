import React from 'react';

const FormInput = ({ label, type, value, onChange, name }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input 
                type={type} 
                value={value} 
                onChange={onChange} 
                name={name} 
                className="form-control" 
                required
            />
        </div>
    );
};

export default FormInput;