import React,{ useState , useEffect} from 'react'
import ErrorMessage from './ErrorMessage';
export default function FormApi() {
    const [students,setStudents]=useState([]);

useEffect(()=>{
    fetch("").then((result)=>{
        result.json().then((resp)=>{
            setStudents(resp);
        })
    })
},[])
    return (
        <div>
            <h1>On API Call</h1>
            <table>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>E-Mail id</td>
                    <td>Contact Number</td>
                    <td>City</td>
                    <td>Pincode</td>
                    <td>State</td>
                    <td>Country</td>
                    <td>Hobby</td>
                </tr>{
                    students.map((items)=>{
                        return(
                            <tr>
                                <td>{items.fname}</td>
                                <td>{items.lname}</td>
                                <td>{items.mail}</td>
                                <td>{items.mob}</td>
                                <td>{items.city}</td>
                                <td>{items.pincode}</td>
                                <td>{items.state}</td>
                                <td>{items.country}</td>
                                <td>{items.hobby}</td>
                            </tr>
                        );
                    })
                }
            </table>
        </div>
    )
}
