import { TurnContext } from 'botbuilder';

const name = 'Faqs';

function help() {
  return {
    'faq 2': 'What to do if I forgot password',
    'faq 1': 'How to upload file'
  };
}

async function processor(context: TurnContext, _: string, provider: string) {
  console.log('faq processor called');
  let msg;
  switch (provider) {
    case '2':
      msg = 'Write down your password';
      break;
    case '1':
      msg = 'Go to upload page to upload';
      break;
    default:
      msg = 'there is no answer for this faq'
      break;
  }
  await context.sendActivity({
    text: msg,
    textFormat: 'plain',
    type: 'message'
  });
}

export { help, name, processor }
