export const handler = async (event) => {
  const jokes = [
    "How did Microsoft Office get so famous?... Due to good Word of mouth.",
    "What do you do when you encounter a sad Xbox?... You console it.",
    "What made the Java developers wear glasses?... They can't C.",
    "I would tell you a UDP joke, but you might not get it.",
    "Two bytes meet. The first byte asks, 'Are you ill?' The second byte replies, 'No, just feeling a bit off.",
    "There's a band called 1023MB. They haven't had any gigs yet.",
    "What's the best thing about teamwork? You have someone else to blame!",
    "Why are iPhone chargers not called Apple Juice?!",
    "Why did the PowerPoint Presentation cross the road? A. To get to the other slide.",
    "How does a computer get drunk? A. It takes screenshots."
  ]
  const random = Math.floor(Math.random() * 10)
  const response = {
    statusCode: 200,
    body: <h2 style="text-align: center; margin-top: 40px; font-family: monospace;">${jokes [random]}</h2>,
    headers: {
      'Content-Type': 'text/html',
    }
  }

  return response;
};
