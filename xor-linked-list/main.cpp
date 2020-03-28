#include <iostream>
#include <bits/stdc++.h>
#include <inttypes.h>

using namespace std;


class Node {
public:
    int data;
    Node *npx;
};

Node *XOR(Node *a, Node *b) {
    return (Node *) ((uintptr_t) (a) ^ (uintptr_t) (b));
}

void insert(Node **head_ref, int data) {
    Node *new_node = new Node();
    new_node->data = data;
    new_node->npx = XOR(*head_ref, NULL);
    if (*head_ref != NULL) {
        Node *next = XOR((*head_ref)->npx, NULL);
        (*head_ref)->npx = XOR(new_node, next);
    }
    *head_ref = new_node;
}


void printList(Node *head) {
    Node *curr = head;
    Node *prev = NULL;
    Node *next;

    std::cout << "Following are the nodes of Linked List: \n";

    while (curr != NULL) {
        std::cout << curr->data << " ";
        next = XOR(prev, curr->npx);
        prev = curr;
        curr = next;
    }
}

int main() {
    Node *head = NULL;
    insert(&head, 10);
    insert(&head, 20);
    insert(&head, 30);
    insert(&head, 40);

    // print the created list
    printList(head);

    return (0);
}
