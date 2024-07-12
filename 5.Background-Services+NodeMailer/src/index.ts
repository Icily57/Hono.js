import mailFunction from './mails'
import cron from 'node-cron';

cron.schedule('* * * * * *', () => {
    console.log('Hello World');
}); 

cron.schedule('* * * * *', () => {
    mailFunction(
        'kelchospenseworks247@gmail.com',
        'Pay your rent on time',
        "🙏Hello, this is a reminder to pay your rent on time, Thanks"        
    )
});