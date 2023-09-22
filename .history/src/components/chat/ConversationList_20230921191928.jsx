import React from "react";

const ConversationList = () => {
    return (
        <>
            {
                conversations.map( ( conversation, index ) =>
                {
                    <ConversationList key={index} props={conversation}/>
                })
        }
        </>
  );
};

export default ConversationList;
