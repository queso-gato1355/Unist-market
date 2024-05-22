import React, { useState } from "react";

const RegisterModal = ({ onClose }) => {
    console.log("Register Modal");

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [selectedImage, setSelectedImage] = useState(null); // 이미지 파일 상태 추가

    const handleImageSelect = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 회원가입 로직 구현
        console.log("ID:", id);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
        console.log("Nickname:", nickname);
    };

    return (
        <div className="modal">
            <div className="modal-content bg-white rounded-lg shadow-lg p-6">
                <span className="modal-close" onClick={onClose}>&times;</span>
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <div className="flex">
                    <div className="w-1/3 flex flex-col items-center">
                        <div className="border border-gray-300 p-4 mb-2 w-full text-center">
                            {selectedImage ? (
                                <img
                                    src={URL.createObjectURL(selectedImage)}
                                    alt="Preview"
                                    className="max-h-48"
                                />
                            ) : (
                                "Test Image"
                            )}
                        </div>
                        <label
                            htmlFor="image-upload"
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded cursor-pointer"
                        >
                            Select...
                            <input
                                type="file"
                                id="image-upload"
                                className="hidden"
                                onChange={handleImageSelect}
                            />
                        </label>
                    </div>
                    <div className="w-2/3 ml-4">
                        <form onSubmit={handleSubmit}>
                            <div className="w-1/3 flex flex-col items-center">
                                <div className="border border-gray-300 p-4 mb-2 w-full text-center">
                                    Test Image
                                </div>
                                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
                                    Select...
                                </button>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="reg-id"
                                    className="block text-sm font-bold mb-2"
                                >
                                    ID
                                </label>
                                <input
                                    type="text"
                                    id="reg-id"
                                    className="w-full p-2 border rounded"
                                    placeholder="Enter your ID..."
                                    value={id}
                                    onChange={(e) => setId(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="reg-password"
                                    className="block text-sm font-bold mb-2"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="reg-password"
                                    className="w-full p-2 border rounded"
                                    placeholder="Enter your password..."
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="reg-password-again"
                                    className="block text-sm font-bold mb-2"
                                >
                                    Password again
                                </label>
                                <input
                                    type="password"
                                    id="reg-password-again"
                                    className="w-full p-2 border rounded"
                                    placeholder="Enter your password again..."
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="nickname"
                                    className="block text-sm font-bold mb-2"
                                >
                                    Nickname
                                </label>
                                <input
                                    type="text"
                                    id="nickname"
                                    className="w-full p-2 border rounded"
                                    placeholder="Enter your nickname..."
                                    value={nickname}
                                    onChange={(e) =>
                                        setNickname(e.target.value)
                                    }
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;
