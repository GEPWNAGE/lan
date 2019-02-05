import * as React from 'react';

import Panel from '../Panel';
import useShoutbox, { Message } from './useShoutbox';

interface ShoutboxMessageProps {
    message: Message;
}

function ShoutboxMessage({ message }: ShoutboxMessageProps) {
    return (
        <article className="ShoutboxMessage">
            <header className="ShoutboxMessage__header">
                <span className="ShoutboxMessage__username">
                    {message.username}
                </span>
                <time className="ShoutboxMessage__time">
                    {message.time.toLocaleString('nl-NL', {
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </time>
            </header>
            <p className="ShoutboxMessage__body">{message.body}</p>
        </article>
    );
}

export default function ShoutboxPanel() {
    const [messages] = useShoutbox();

    return (
        <Panel>
            {messages.map((message) => (
                <ShoutboxMessage key={message.id} message={message} />
            ))}
        </Panel>
    );
}