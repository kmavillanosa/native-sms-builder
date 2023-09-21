interface SecuredLayoutProps {
    canAccess: () => boolean;
    children: React.ReactNode;
}

/// Place your layout definitions here
const Layout: React.FC<SecuredLayoutProps> = ({ children, canAccess }) => {
    if (!canAccess())
        return "Access denied, you are not allowed to access this page";

    return <>{children}</>;
};

export default Layout;
