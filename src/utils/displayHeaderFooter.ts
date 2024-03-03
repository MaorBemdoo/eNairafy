"use client";

const displayHeaderFooter = () => {
    return (
        location.pathname === "/login" ||
        location.pathname === "/signup" ||
        location.pathname === "/reset-password"
    );
};

export default displayHeaderFooter;
