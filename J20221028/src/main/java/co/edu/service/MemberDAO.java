package co.edu.service;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import co.edu.common.DAO;
import co.edu.member.MemberVO;

public class MemberDAO extends DAO {
//한건 목록
	public void insertMember(MemberVO vo) {
		getConnect();
		String sql = "insert into members (id, passwd, email, name, resposibility)"//
				+ " values(?, ?, ?, ?, 'user')";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getId());
			psmt.setString(2, vo.getPasswd());
			psmt.setString(3, vo.getEmail());
			psmt.setString(4, vo.getName());
			
			psmt.executeUpdate();
			
			vo.setResposibility("user");
			
		} catch (SQLException e) {

			e.printStackTrace();
		}finally {
			disconnect();
		}
	}
	
	//전체목록
	public List<MemberVO> memberList(){
		getConnect();
		List<MemberVO> list = new ArrayList<MemberVO>();
		String sql = "select * from members";
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				MemberVO vo = new MemberVO();
				vo.setId(rs.getString("id"));
				vo.setName(rs.getString("name"));
				vo.setEmail(rs.getString("email"));
				vo.setResposibility(rs.getString("resposibility"));
				
				list.add(vo);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return list;
	}
	public boolean memberDelete(String id) {
		getConnect();
		String sql = "delete from members where id=?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			int r = psmt.executeUpdate();
			if(r>0)
				return true;
		} catch (Exception e) {
			System.out.println("지울수 없습니다");
		}finally {
			disconnect();
		}
		return false;
	}
}
