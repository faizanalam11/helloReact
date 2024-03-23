const Contact = () => {
    return (
            <div className="flex flex-col max-w-96 mx-auto m-6">
                <h1 className="font-extrabold text-4xl mx-auto my-2">Contact US</h1>
                <h2 className="mx-auto my-2 font-bold text-center">Feel free to contact us anytime. We will get back to you as soon as we can!</h2>
                <input type="text" placeholder="Name" className="bg-[#d3d3d34d] focus:bg-gray-200 hover:bg-gray-200 min-w-96 rounded-lg p-2 m-2 focus:border-[#008ca8]"></input>
                <input type="text" placeholder="Email" className="bg-[#d3d3d34d] focus:bg-gray-200 hover:bg-gray-200 min-w-96 rounded-lg p-2 m-2 focus:border-[#008ca8]"></input>
                <input type="text" placeholder="Message" className="bg-[#d3d3d34d] focus:bg-gray-200 hover:bg-gray-200 min-w-96 rounded-lg p-2 m-2 focus:border-[#008ca8]"></input>
                <button className="m-2 p-2 min-w-96 bg-[#242529] hover:text-gray-200 text-white rounded-lg shadow-lg">SEND</button>
            </div>
    );
};

export default Contact;