export const formatDate = date => {
    const published = new Date(date);
    return published.toLocaleDateString(
        'en-US',
        { year: 'numeric', month: 'long', day: 'numeric' }
    );
}
