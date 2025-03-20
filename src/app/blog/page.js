import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

export default function Blog() {
  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h2" gutterBottom>
        My Blog
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Post 1: My First Post"
            secondary="A brief teaser about this post."
            sx={{ '&:hover': { color: 'primary.main' } }}
          />
          <Button variant="outlined" href="/blog/post-1">
            Read
          </Button>
        </ListItem>
      </List>
      <Button variant="contained" href="/" sx={{ mt: 2 }}>
        Back to Portfolio
      </Button>
    </Box>
  );
}