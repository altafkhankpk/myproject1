import category from "@/apis/category";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

let addCategoryShow= ({setShowCategory}) => {


    let [categories, setCategories] = useState([])

    useEffect(() => {


        category.getCategories().then((resp) => {

            setCategories(resp.data);

        })

    }, []);

    // function addCategory(){

    // }

    const addCategory = () => {


        category.addCategory({ name: prompt("enter a category name") }).then((resp) => {
            console.log(resp.data);
            setCategories([...categories, resp.data]);
            toast.success('cateogry adding success')
        });

    }

    const deleteCategory = (cate) => {

        category.deleteCategory({_id:cate._id}).then(function(resp){
            console.log(resp.data);

            setCategories(categories.filter(function(cateogry){
                return cateogry._id != cate._id;
            }))

        })

    }

    return <div id="addCategoryModal" className="modal" style={{ display: 'block' }} tabIndex={-1}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add category</h5>
                    <button
                    onClick={e=>setShowCategory(false)}
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                </div>
                <div className="modal-body">
                    <table>

                        {
                            categories.map(function (category) {
                                return <tr>
                                    <td>{category.name}</td>
                                    <td>
                                        <button onClick={function () {

                                            deleteCategory(category)

                                        }}>DEL</button>
                                    </td>
                                </tr>
                            })
                        }
                        <tfoot>
                            <button onClick={addCategory}>Add category</button>
                        </tfoot>
                    </table>
                </div>
                <div className="modal-footer">
                    <button
                    onClick={e=>setShowCategory(false)}
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Close
                    </button>
                    <button type="button" className="btn btn-primary">
                        Save changes
                    </button>
                </div>
            </div>
        </div>
    </div>


}

export default addCategoryShow;