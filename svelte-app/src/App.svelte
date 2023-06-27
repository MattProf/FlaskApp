<script>
    let isChatOpen = false;
    let input = "";
    let messages = [];
    const toggleChat = () => (isChatOpen = !isChatOpen);

    const submitMessage = () => {
        if (input) {
            const date = new Date();
            messages = [
                { text: input, timestamp: date.toISOString() },
                ...messages,
            ];
            input = "";
        }
    };
</script>

<button class="floating-button btn btn-primary" on:click={toggleChat}
    >Chat</button
>

<div class="chat-window {isChatOpen ? '' : 'hidden'}">
    <div class="chat-messages">
        {#each messages as message (message.timestamp)}
            <div class="message">
                <p>{message.text}</p>
                <small>{message.timestamp}</small>
            </div>
        {/each}
    </div>
    <div class="chat-input">
        <input
            type="text"
            bind:value={input}
            on:keyup={(e) => e.key === "Enter" && submitMessage()}
        />
        <button class="btn btn-primary" on:click={submitMessage}>Submit</button>
    </div>
</div>

<style>
    .floating-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 100;
    }

    .chat-window {
        position: fixed;
        bottom: 70px;
        right: 20px;
        height: 500px;
        width: 300px;
        overflow-y: auto;
        background-color: white;
        border: 1px solid black;
        z-index: 90;

        /* Flexbox styling */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    /* chat messages */
    .chat-messages {
        overflow-y: auto;
    }

    /* chat input */
    .chat-input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-top: 1px solid #ccc;
    }

    .chat-input input {
        flex-grow: 1;
        margin-right: 10px;
    }

    .hidden {
        display: none;
    }

    .message {
        border-bottom: 1px solid #ccc;
        padding: 10px;
    }
</style>
