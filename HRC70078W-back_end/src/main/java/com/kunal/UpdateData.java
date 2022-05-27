package com.kunal;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/UpdateData")
public class UpdateData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
				String fieldValue = request.getParameter("sl_no");
				int field = Integer.parseInt(fieldValue);
				String currency = request.getParameter("invoice_currency");
				String terms = request.getParameter("cust_payment_terms");
			
			
			
			Connection con = DBConnection.createConnect();
			String query = "UPDATE winter_internship SET invoice_currency = ?, cust_payment_terms = ? WHERE sl_no = ?";
			
			PreparedStatement st = con.prepareStatement(query);
			st.setString(1, currency);
			st.setString(2, terms);
			st.setInt(3, field);
			
			
			st.executeUpdate();
			con.close();
		}
		
		catch(Exception e) {
			
		}
	}
}


