"use client";

import { useState } from "react";
import { useEffect } from "react";

export default function SettingsPage() {
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [pushNotifications, setPushNotifications] = useState(false);
    const [theme, setTheme] = useState("light");
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
    const [profileName, setProfileName] = useState("");
    const [profileEmail, setProfileEmail] = useState("");

    useEffect(() => {
        // Fetch initial settings from an API or local storage
        const fetchSettings = async () => {
            const response = await fetch("/api/settings");
            const data = await response.json();
            setEmailNotifications(data.emailNotifications);
            setPushNotifications(data.pushNotifications);
            setTheme(data.theme);
            document.documentElement.className = data.theme; // Apply theme to the document
        };
        fetchSettings();
    }, []);

    const handleEditProfile = () => {
        // Open the edit profile modal
        setIsEditProfileOpen(true);
    };

    const handleSaveProfile = async () => {
        // Save profile changes to an API or local storage
        await fetch("/api/profile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: profileName, email: profileEmail }),
        });
        alert("Profile updated successfully.");
        setIsEditProfileOpen(false);
    };

    const handleThemeChange = async (selectedTheme: string) => {
        setTheme(selectedTheme);
        document.documentElement.className = selectedTheme; // Apply theme to the document
        // Save theme preference to an API or local storage
        await fetch("/api/settings/theme", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ theme: selectedTheme }),
        });
        alert(`Theme changed to ${selectedTheme}`);
    };

    const handleDeleteAccount = async () => {
        const confirmDelete = confirm("Are you sure you want to delete your account?");
        if (confirmDelete) {
            // Call API to delete account
            const response = await fetch("/api/account/delete", { method: "DELETE" });
            if (response.ok) {
                alert("Account deleted successfully.");
                window.location.href = "/goodbye";
            } else {
                alert("Failed to delete account. Please try again.");
            }
        }
    };

    const handleNotificationChange = async (type: "email" | "push", value: boolean) => {
        if (type === "email") setEmailNotifications(value);
        if (type === "push") setPushNotifications(value);

        // Save notification preferences to an API or local storage
        await fetch("/api/settings/notifications", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ type, value }),
        });
    };

    return (
        <div className={`p-6 shadow-md rounded-lg max-w-3xl mx-auto ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
            <h1 className="text-2xl font-bold mb-6 border-b pb-2">Settings</h1>
            <section className="mt-4">
                <h2 className="text-xl font-semibold">Profile</h2>
                <p>Update your profile information.</p>
                <button
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    onClick={handleEditProfile}
                >
                    Edit Profile
                </button>
            </section>
            <section className="mt-6">
                <h2 className="text-xl font-semibold">Notifications</h2>
                <p>Manage your notification preferences.</p>
                <label className="block mt-2">
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={emailNotifications}
                        onChange={(e) => handleNotificationChange("email", e.target.checked)}
                    />
                    Email Notifications
                </label>
                <label className="block mt-2">
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={pushNotifications}
                        onChange={(e) => handleNotificationChange("push", e.target.checked)}
                    />
                    Push Notifications
                </label>
            </section>
            <section className="mt-6">
                <h2 className="text-xl font-semibold">Theme</h2>
                <p>Choose your preferred theme.</p>
                <button
                    className={`mt-2 px-4 py-2 rounded transition ${
                        theme === "light" ? "bg-gray-300" : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    onClick={() => handleThemeChange("light")}
                >
                    Light Mode
                </button>
                <button
                    className={`mt-2 ml-2 px-4 py-2 rounded transition ${
                        theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-800 text-white hover:bg-gray-700"
                    }`}
                    onClick={() => handleThemeChange("dark")}
                >
                    Dark Mode
                </button>
            </section>
            <section className="mt-6">
                <h2 className="text-xl font-semibold">Privacy</h2>
                <p>Control your privacy settings.</p>
                <button
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    onClick={handleDeleteAccount}
                >
                    Delete Account
                </button>
            </section>

            {isEditProfileOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-md max-w-sm w-full border border-gray-200">
                        <h2 className="text-xl font-bold mb-4 text-gray-800">Edit Profile</h2>
                        <label className="block mb-2">
                            <span className="text-gray-700 font-medium">Name</span>
                            <input
                                type="text"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                value={profileName}
                                onChange={(e) => setProfileName(e.target.value)}
                            />
                        </label>
                        <label className="block mb-4">
                            <span className="text-gray-700 font-medium">Email</span>
                            <input
                                type="email"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                value={profileEmail}
                                onChange={(e) => setProfileEmail(e.target.value)}
                            />
                        </label>
                        <div className="flex justify-end">
                            <button
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition mr-2 text-gray-800 font-medium"
                                onClick={() => setIsEditProfileOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition font-medium"
                                onClick={handleSaveProfile}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
  
  