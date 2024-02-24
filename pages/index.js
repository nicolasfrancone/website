import Head from 'next/head';

// Your Index page component
const Index = () => {
  return (
    <div>
      {/* Set page title */}
      <Head>
        <title>Home Page</title>
      </Head>

      {/* Page content */}
      <h1>Welcome to My Next.js App</h1>
      <p>This is a basic Next.js project.</p>
    </div>
  );
};

export default Index;
