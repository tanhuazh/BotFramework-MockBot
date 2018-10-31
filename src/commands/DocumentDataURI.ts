import { TurnContext } from 'botbuilder';

const name = 'Document Data URI';

function help() {
  return {
    'document-data-uri': 'open attachment'
  };
}

async function processor(context: TurnContext) {
  console.log('Start');
  await context.sendActivity({
    type: 'message',
    attachments: [{
      contentType: 'text/plain',
      contentUrl: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==`,
      name: 'dot.png'
    }]
  });
  console.log('Succeeded');
}

export { help, name, processor }
