export const isArtist = (req, res, next) => {
    if (req.artist.isArtist === true) {
        next();
    } else {
        res.json({ success: false, message: 'send form for artist' });
    }
};
