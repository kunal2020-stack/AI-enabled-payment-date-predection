package com.kunal;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class RecieveData
 */
@WebServlet("/RecieveData")
public class RecieveData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RecieveData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
		try {; 
			Connection con = DBConnection.createConnect();
			Statement st = con.createStatement();
			String query = "SELECT sl_no, business_code, cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id from winter_internship WHERE is_deleted =0 ;";
			ResultSet rs = st.executeQuery(query);
			
			ArrayList<Response> data = new ArrayList<>();
			while(rs.next())
			{
				Response inv = new Response();
				inv.setSl_no(rs.getInt("sl_no"));
				inv.setBusiness_code(rs.getString("business_code"));
				inv.setCust_number(rs.getInt("cust_number"));
				inv.setClear_date(rs.getString("clear_date"));
				inv.setBuisness_year(rs.getString("buisness_year"));
				inv.setDoc_id(rs.getString("doc_id"));
				inv.setPosting_date(rs.getString("posting_date"));
				inv.setDocument_create_date(rs.getString("document_create_date"));
				inv.setDue_in_date(rs.getString("due_in_date"));
				inv.setInvoice_currency(rs.getString("invoice_currency"));
				inv.setDocument_type(rs.getString("document_type"));
				inv.setPosting_id(rs.getInt("posting_id"));
				inv.setTotal_open_amount(rs.getFloat("total_open_amount"));//,,,
				inv.setBaseline_create_date(rs.getString("baseline_create_date"));
				inv.setCust_payment_terms(rs.getString("cust_payment_terms"));
				inv.setInvoice_id(rs.getInt("invoice_id"));
				
				data.add(inv);
			}
			Gson gson = new GsonBuilder().serializeNulls().create();
			String mydata  = gson.toJson(data);
			response.setContentType("application/json");
			try {
				response.getWriter().write(mydata);//getWriter() returns a PrintWriter object that can send character text to the client. 
			}
			catch(IOException e)
			{
				e.printStackTrace();
			}
			rs.close();
			st.close();
			con.close();
			
		}
		catch(SQLException e) {
			e.printStackTrace();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
