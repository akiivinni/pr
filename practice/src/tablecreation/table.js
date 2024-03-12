import { useEffect, useState } from "react";
import axios from "axios";

const Tablecreation = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
          .then(res => {
            setData(res.data);
          })
          .catch(error => {
            console.error(error);
          });
    }, []);

    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto">
                <table className="table-auto min-w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Image</th>
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(product => (
                            <tr key={product.id} className="border">
                                <td className="border px-4 py-2">
                                    <img src={product.image} alt={product.title} className="w-full h-32 object-cover" />
                                </td>
                                <td className="border px-4 py-2">
                                    <h2 className="text-lg font-semibold">{product.title}</h2>
                                </td>
                                <td className="border px-4 py-2">
                                    <p className="text-gray-600">${product.price}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tablecreation;
