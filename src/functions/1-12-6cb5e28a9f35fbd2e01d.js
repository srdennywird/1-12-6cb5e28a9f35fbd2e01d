import { app, InvocationContext } from "@azure/functions";
import * as https from "https";
import * as df from 'durable-functions';
import { ActivityHandler, OrchestrationContext, OrchestrationHandler } from 'durable-functions';

codiAsAgo22

export async function serviceBusQueueTrigger(message: unknown, context: InvocationContext): Promise<void> {
    context.log('Service bus queue function processed message:', message);
    const client = df.getClient(context);
    const instanceId: string = await client.startNew("1-12-6cb5e28a9f35fbd2e01d", message);
    context.log(`Started orchestration with ID = '${instanceId}'.`);
}
app.serviceBusQueue('1-12-6cb5e28a9f35fbd2e01d', {
    connection: 'AAAA',
    queueName: '1-12-6cb5e28a9f35fbd2e01d',
    handler: serviceBusQueueTrigger,
    extraInputs: [df.input.durableClient()],
});