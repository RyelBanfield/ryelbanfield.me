const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="py-16">{children}</main>;
};

export default Main;
