'use client'
import { Field, Form, Formik } from 'formik'
import React from 'react'

type Props = {}

const ProductCreateModal = (props: Props) => {
    function submit(values: any) {
        console.log(values)
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('product_create_modal').showModal()}>open modal</button>
            <dialog id="product_create_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Product Form</h3>
                    <Formik initialValues={{
                        title:"",
                        price:10,
                        category: "clothes"
                    }}
                        onSubmit={submit} >
                        <Form>
                            <div>
                                <div>
                                    <label>Title</label>
                                    <Field name="title" type="text" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <label>Price</label>
                                    <Field name="price" type="text" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <label>Description</label>
                                    <Field as="textarea" name="description" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <label>Category</label>
                                    <Field name="category" type="text" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <label>Image</label>
                                    <Field name="image" type="text" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <label>Rate</label>
                                    <Field name="rate" type="text" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <label>Count</label>
                                    <Field name="count" type="text" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </Form>
                    </Formik>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ProductCreateModal