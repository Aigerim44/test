import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '././users.module.css'

function UsersPage() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [users, setUsers] = React.useState([]);

    const onSubmit = (data) => {
        setUsers([...users, data]);
        reset();
    };

    const handleDeleteUser = (index) => {
        const updatedUsers = users.filter((user, i) => i !== index);
        setUsers(updatedUsers);
    };

    // const handleSubmit = () => {
    //
    // }
    //
    // if ()

    const modalWindow = () => {
        return (
            <h1>Пользователь успешно сохранен</h1>
        )
    }


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputs}>
                    <label>Name:</label>
                    <input {...register("name", { required: true })} />
                    {errors.name && <span>This field is required</span>}
                </div>

                <div className={styles.inputs}>
                    <label>Username:</label>
                    <input {...register("username", { required: true })} />
                    {errors.username && <span>This field is required</span>}
                </div>

                <div className={styles.inputs}>
                    <label>Email:</label>
                    <input type="email" {...register("email", { required: true })} />
                    {errors.email && <span>This field is required</span>}
                </div>


                <button type="submit" style={styles.button} onClick={modalWindow}>Create</button>
            </form>

            {users.length === 0 ? <p>Table is empty</p> :
                <table className={styles.table}>
                    <thead className={styles.container}>
                    <tr  className={styles.inputs}>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleDeleteUser(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            }

        </div>
    );
}

export default UsersPage;