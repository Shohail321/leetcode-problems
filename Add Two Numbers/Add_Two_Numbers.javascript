var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0); // Dummy head to simplify logic
    let current = dummy;
    let carry = 0;
    
    // Process both lists until both are exhausted and no carry remains
    while (l1 !== null || l2 !== null || carry !== 0) {
        // Get values from current nodes (0 if node is null)
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;
        
        // Calculate sum and new carry
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10); // Integer division for carry
        let digit = sum % 10; // Get the ones digit
        
        // Create new node with the digit
        current.next = new ListNode(digit);
        current = current.next;
        
        // Move to next nodes if they exist
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    
    return dummy.next; // Return the list after dummy head
};