import React, { useContext } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; 
import CartContext from '../../context/cart/CartContext'; 
import CartItem from './CartItem';
import { clearCart } from '../../context/cart/actions'; 

function Cart() {
    const { cart, dispatchCart } = useContext(CartContext);

    const handleDownloadPDF = () => {
        const pdf = new jsPDF();

        pdf.text('Invoice', 20, 20);

        pdf.autoTable({
            head: [['Product', 'Quantity', 'Price']],
            body: cart.products.map((product) => [
                product.title,
                product.quantity,
                `$${product.price.toFixed(2)}`,
            ]),
        });
        const totalYPos = pdf.lastAutoTable.finalY + 10;
        pdf.text(`Total: $${cart.products.reduce((acc, cur) => acc + cur.price, 0).toFixed(2)}`, 20, totalYPos);
        pdf.save('invoice.pdf');
    };

    const handleOrderNow = () => {
        dispatchCart(clearCart());
       
    };

    const handleOrderAndDownload = () => {
        handleDownloadPDF();
        handleOrderNow();
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center p-10 gap-5">
            <h1 className="uppercase text-2xl font-mono font-bold ">Cart Page</h1>
            {cart.products.length !== 0 ? (
                <table className="w-[1000px] border-collapse mt-10">
                    <thead className="bg-blue-300 text-white">
                        <tr className="border-b">
                            <th className="p-6">Product</th>
                            <th className="p-6">Brand</th>
                            <th className="p-6">Price</th>
                            <th className="p-6">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.products.map((product) => (
                            <CartItem key={product.id} product={product} />
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>No Items in Cart</div>
            )}

            <hr className="w-full border border-black" />

            <div className="flex justify-between items-center w-full pt-7">
                <button
                    className="border p-2 uppercase bg-blue-300 hover:bg-white"
                    onClick={handleOrderAndDownload} 
                >
                    Order Now and Download PDF
                </button>
                <h1 className="uppercase font-black">
                    Total: ${cart.products.reduce((acc, cur) => (acc += cur.price), 0)}
                </h1>
            </div>
        </div>
    );
}

export default Cart;
