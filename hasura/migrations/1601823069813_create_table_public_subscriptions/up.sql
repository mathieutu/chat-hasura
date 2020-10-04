CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."subscriptions"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "user_id" uuid NOT NULL, "channel_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("channel_id") REFERENCES "public"."channels"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("user_id", "channel_id"));