CREATE VIEW relation_user_channels AS
    SELECT user_id, channels.*
    FROM subscriptions LEFT JOIN channels
    ON subscriptions.channel_id = channels.id;

CREATE VIEW relation_channel_users AS
    SELECT channel_id, users.*
    FROM subscriptions LEFT JOIN users
    ON subscriptions.user_id = users.id;
