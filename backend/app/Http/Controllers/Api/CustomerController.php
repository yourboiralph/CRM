<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Customer::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            "name" => "required|string",
            "phone" => "required|string",
            "address" => "required|string",
            "type" => "required|string"
        ]);

        Customer::create($data);

        return response()->json([
            "success" => true,
            "message" => "Customer added successfully"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer)
    {
        return response()->json([
            "success" => true,
            "message" => "customer found",
            "data" => $customer
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Customer $customer)
    {
        $data = $request->validate([
            "name" => "sometimes|string",
            "phone" => "sometimes|string",
            "address" => "sometimes|string",
            "type" => "sometimes|string",
        ]);

        $customer->update($data);

        return response()->json([
            "success" => true,
            "message" => "Successfully updated",
            "data" => $customer
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        $customer->delete();

        return response()->json([
            "success" => true,
            "message" => "Successfully deleted"
        ]);
    }
}
