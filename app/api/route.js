// route.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        // Simulate processing the request and returning a response
        setTimeout(() => {
            res.status(200).json({ message: 'Sent' });
        }, 1000);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
