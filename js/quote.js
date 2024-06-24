const quotes = [
    {
        quote: "You can waste your lives drawing lines. Or you can live your life crossing them.",
        author: "- Shonda Rhimes"
    },
    {
        quote: "Do not ask if your dream is crazy, ask if it's crazy enough.",
        author: "- Lena Waithe"
    },
    {
        quote: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.",
        author: "- Vince Lombardi"
    },
    {
        quote:  "Setting goals is the first step in turning the invisible into the visible.",
        author: "- Tony Robbins."
    },
    {
        quote: "Success is falling nine times and getting up ten.",
        author: "- Jon Bon Jovi"
    },
    {
        quote: "The fastest way to change yourself is to hang out with people who are already the way you want to be",
        author: "- Reid Hoffman"
    },
    {
        quote: "When we do the best we can, we never know what miracle is wrought in our life or the life of another.",
        author: "- Helen Keller" 
    },
    {
        quote: "Do not judge each day by the harvest you reap but by the seeds that you plant.",
        author: "- Robert Louis Stevenson"
    },
    {
        quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
        author: "- Joshua J.Marine"
    },
    {
        quote: "A person who never made a mistake never tried anything new.",
        author: "- Albert Einstein"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// index가 0부터 시작하기 때문에 floor 사용
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;