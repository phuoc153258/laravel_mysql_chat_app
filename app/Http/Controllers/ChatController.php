<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index()
    {
        $chats = Chat::all();
        return $chats;
    }

    public function create(Request $request)
    {
        $chat = new Chat();
        $chat->user_id = $request->input('user_id');
        $chat->message = $request->input('message');
        $chat->save();
        return $chat;
    }
}
