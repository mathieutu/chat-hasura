CREATE VIEW relation_channel_user_messages AS
    SELECT channel_id, user_id, messages.*
    FROM messages LEFT JOIN subscriptions
    ON messages.subscription_id = subscriptions.id;
