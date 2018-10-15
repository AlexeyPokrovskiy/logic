@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
                    <p>Name: {{Auth::user()->name}}</p>
                    <p>Lastname: {{Auth::user()->lastname}}</p>
                    <p>Phone: {{Auth::user()->phone}}</p>
                    <p>Email: {{Auth::user()->email}}</p>
                    <p>Created_at: {{Auth::user()->created_at}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
