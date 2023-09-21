interface LayoutProps {
    children: React.ReactNode;
}

/// Place your layout definitions here
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <>{children}</>;
};

export default Layout;
