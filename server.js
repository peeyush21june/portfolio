const app = express();

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle requests for any path by serving the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
