<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Chat;
use Illuminate\Http\Request;

class ChatApiController extends Controller
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
