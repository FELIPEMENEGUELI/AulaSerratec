export const PageError = ({message}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>{message}</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
    </div>
  );
};
