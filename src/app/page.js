import { Box, Typography, Button, Card, CardContent } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h2" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1" paragraph>
        Hi, I’m [Your Name]. I’m a freelancer showcasing my work below!
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Card sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h5">Project 1</Typography>
            <Typography variant="body2">
              Description of your first project goes here.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h5">Project 2</Typography>
            <Typography variant="body2">
              Description of your second project goes here.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Button variant="contained" href="/blog" sx={{ mt: 2 }}>
        Go to Blog
      </Button>
    </Box>
  );
}
