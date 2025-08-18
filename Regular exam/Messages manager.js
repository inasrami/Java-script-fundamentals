function messagesManager(data) {
    let maxCapacity = Number(data.shift());
    let users = new Map();
    
    for (let entry of data) {
        if (entry === "Statistics") break;
        
        let parts = entry.split("=");
        let command = parts[0];
        
        if (command === "Add") {
            let username = parts[1];
            let sent = Number(parts[2]);
            let received = Number(parts[3]);
            
            if (!users.has(username)) {
                let total = sent + received;
                if (total >= maxCapacity) {
                    console.log(`${username} reached the capacity!`);
                } else {
                    users.set(username, { sent: sent, received: received });
                }
            }
        } else if (command === "Message") {
            let sender = parts[1];
            let receiver = parts[2];
            
            if (users.has(sender) && users.has(receiver)) {
                // Update sender
                let senderData = users.get(sender);
                senderData.sent += 1;
                
                if (senderData.sent + senderData.received >= maxCapacity) {
                    console.log(`${sender} reached the capacity!`);
                    users.delete(sender);
                }
                
                // Update receiver (only if receiver still exists)
                if (users.has(receiver)) {
                    let receiverData = users.get(receiver);
                    receiverData.received += 1;
                    
                    if (receiverData.sent + receiverData.received >= maxCapacity) {
                        console.log(`${receiver} reached the capacity!`);
                        users.delete(receiver);
                    }
                }
            }
        } else if (command === "Empty") {
            let username = parts[1];
            if (username === "All") {
                users.clear();
            } else if (users.has(username)) {
                users.delete(username);
            }
        }
    }
    
    console.log(`Users count: ${users.size}`);
    for (let [username, data] of users) {
        let total = data.sent + data.received;
        console.log(`${username} - ${total}`);
    }
}


messagesManager([
    "20",
    "Add=Mark=3=9",
    "Add=Berry=5=5", 
    "Add=Clark=4=0",
    "Empty=Berry",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9",
    "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Statistics"
]);