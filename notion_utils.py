import requests

def send_to_notion_via_composio(payload):
    url = "https://mcp.composio.dev/composio/server/bd86f0b3-feaf-4240-a966-5db8a76980ff?useComposioHelperActions=true"

    response = requests.post(url, json=payload)

    if response.status_code == 200:
        return response.json()
    else:
        return {"error": response.status_code, "details": response.text} 