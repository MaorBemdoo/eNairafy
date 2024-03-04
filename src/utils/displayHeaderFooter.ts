const displayHeaderFooter = (pathname: string): boolean => {
    return (
        pathname === "/login" ||
        pathname === "/signup" ||
        pathname === "/reset-password"
    );
};

export default displayHeaderFooter;
