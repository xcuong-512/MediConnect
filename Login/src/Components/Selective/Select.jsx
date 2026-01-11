import React, { useEffect, useState } from 'react'
import './Select.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ChildSelect from './ChildSelect'
import SelectDoctor from './SelectDoctor'
function Select() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/doctor/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
    }, [id])
    data.forEach(element => {
        console.log(element.specialty_name
        )
    });
    return (

        <>

            {data.length > 0 && (
                <ChildSelect item={data[0]} />
            )}


            {data.map((items, index) => (
                <SelectDoctor
                    key={items.id || index}
                    item={items}
                />
            ))}






        </>



    )
}

export default Select
