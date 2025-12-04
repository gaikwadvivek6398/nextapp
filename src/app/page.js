export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1 style={{ fontSize: "42px", color: "#222", marginBottom: "20px" }}>
        🚀 My Next.js App is Live!
      </h1>

      <p style={{ fontSize: "20px", color: "#555" }}>
        This content is coming from <strong>page.js</strong> and is deployed on
        Vercel 🎉
      </p>
    </main>
  );
}
