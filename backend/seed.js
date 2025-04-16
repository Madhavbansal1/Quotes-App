

const mongoose = require('mongoose');
const QuoteModel = require('./models/Quote');

const quotes = [
    { author: 'Albert Einstein', text: 'Life is like riding a bicycle. To keep your balance, you must keep moving.' },
    { author: 'Maya Angelou', text: 'You will face many defeats in life, but never let yourself be defeated.' },
    { author: 'Walt Disney', text: 'The way to get started is to quit talking and begin doing.' },
    { author: 'Steve Jobs', text: 'Innovation distinguishes between a leader and a follower.' },
    { author: 'Oprah Winfrey', text: 'Turn your wounds into wisdom.' },
    { author: 'Nelson Mandela', text: 'It always seems impossible until it is done.' },
    { author: 'Mark Twain', text: 'The secret of getting ahead is getting started.' },
    { author: 'Confucius', text: 'It does not matter how slowly you go as long as you do not stop.' },
    { author: 'J.K. Rowling', text: 'It is our choices that show what we truly are, far more than our abilities.' },
    { author: 'Isaac Newton', text: 'If I have seen further it is by standing on the shoulders of giants.' },
    { author: 'Eleanor Roosevelt', text: 'The future belongs to those who believe in the beauty of their dreams.' },
    { author: 'Bruce Lee', text: 'Knowing is not enough, we must apply. Willing is not enough, we must do.' },
    { author: 'Helen Keller', text: 'Keep your face to the sunshine and you cannot see a shadow.' },
    { author: 'Thomas Edison', text: 'Genius is one percent inspiration and ninety-nine percent perspiration.' },
    { author: 'Brene Brown', text: 'Vulnerability is the birthplace of innovation, creativity and change.' },
    { author: 'Tony Robbins', text: 'Setting goals is the first step in turning the invisible into the visible.' },
    { author: 'Jim Rohn', text: 'Either you run the day or the day runs you.' },
    { author: 'Aristotle', text: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.' },
    { author: 'Ralph Waldo Emerson', text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.' },
    { author: 'Unknown', text: 'Every accomplishment starts with the decision to try.' }
];


async function seed(){
    await QuoteModel.insertMany(quotes);
    console.log('Database seeded!');
}

module.exports = seed;